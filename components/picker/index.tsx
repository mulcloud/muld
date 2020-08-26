/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, useEffect } from 'react';

import { createNS, isDef, withDefaultProps } from '../utils';

import { BORDER_UNSET_TOP_BOTTOM } from '../utils/constant';

import { View } from './style';

import Loading from '../loading';
import { PickerColumn } from './PickerColumn';

const [bem] = createNS('picker');
export const DEFAULT_ITEM_HEIGHT = 44;

interface ColumnRoot {
    values: (string | ColumnObject | string | { values: string })[];
}

interface ColumnObject {
    values?: string;
    children?: [];
    defaultIndex?: number;
}

interface ColumnCascade {
    text: string;
    children?: { text: string; children: { text: string }[] }[];
}

export type Column = ColumnObject | ColumnRoot | string | ColumnCascade;

interface PropsType {
    value?: string;
    title?: string;
    loading?: boolean;
    itemHeight?: number;
    showToolbar?: boolean;
    visibleItemCount?: number | string;
    cancelButtonText?: string;
    confirmButtonText?: string;
    defaultIndex?: number;
    allowHtml?: boolean;
    swipeDuration?: number;
    columns: Column[];
    toolbarPosition?: string;
    valueKey?: string;
    onChange?: (value: string, index: string) => void | string;
    onConfirm?: (value: string, index: string) => void | string;
    onCancel?: () => void;
    children?: any;
}

const defaultProps = {
    value: '',
    title: '标题',
    loading: false,
    itemHeight: DEFAULT_ITEM_HEIGHT,
    showToolbar: true,
    visibleItemCount: 6,
    allowHtml: false,
    cancelButtonText: '取消',
    confirmButtonText: '确认',
    defaultIndex: 0,
    swipeDuration: 200,
    columns: [] as Column[],
    toolbarPosition: 'top',
    valueKey: 'text',
};

export type PickerPropsType = PropsType & typeof defaultProps;

const Picker: React.FC<PickerPropsType> = (props: PickerPropsType) => {
    const {
        value,
        title,
        loading,
        showToolbar,
        visibleItemCount,
        cancelButtonText,
        confirmButtonText,
        itemHeight,
        columns,
        swipeDuration,
        toolbarPosition,
        valueKey,
        allowHtml,
        defaultIndex,
        onConfirm,
        onCancel,
    } = props;

    const [formattedColumns, setFormattedColumns] = useState([] as Column[]);

    const [currentIndex, setCurrentIndex] = useState(defaultIndex);

    const [indexes, setIndexes] = useState([] as number[]);

    const [values, setValues] = useState([] as string[]);

    const [children, setChildren] = useState([] as any[]);

    function updateColumn() {
        if (dataType() === 'text') {
            setFormattedColumns([{ values: columns as string[] }]);
        } else if (dataType() === 'cascade') {
            formatCascade();
        } else {
            const valueArray = value.split(',');
            const newFormattedColumns = columns;

            newFormattedColumns.forEach((column: Column, index: number, array: Column[]) => {
                const newDefaultIndex = (column as {
                    defaultIndex: number;
                    values: string[];
                }).values.findIndex((item: string) => item === valueArray[index]);

                if (newDefaultIndex !== -1) {
                    (newFormattedColumns[index] as {
                        defaultIndex: number;
                        values: string[];
                    }).defaultIndex = newDefaultIndex;
                }
            });
            setFormattedColumns(columns as Column[]);
        }
    }

    function format() {
        updateColumn();
        if (dataType() === 'text' || dataType() === 'cascade') {
            return;
        }
        setIndexes(
            columns.map(
                (item: Column, index: number, array: Column[]) =>
                    (item as ColumnObject).defaultIndex! || 0,
            ),
        );
        setValues(
            columns.map(
                (item: Column, index: number, array: Column[]) =>
                    (item as ColumnObject).values![(item as ColumnObject).defaultIndex || 0],
            ),
        );
    }

    useEffect(() => {
        format();
    }, [value]);

    useEffect(() => {
        updateColumn();
    }, [columns]);

    function itemRemHeight(): number {
        return itemHeight ? itemHeight / 16 : DEFAULT_ITEM_HEIGHT / 16;
    }

    function dataType() {
        const firstColumn: any = columns.length ? columns[0] : ({} as Column);

        if (firstColumn.children) {
            return 'cascade';
        }

        if (firstColumn.values) {
            return 'object';
        }

        return 'text';
    }

    function formatCascade() {
        const formatted: any[] = [];

        let cursor: any = {
            children: columns,
            defaultIndex: undefined as number | undefined,
        };
        const indexesArray = [];

        while (cursor && cursor.children) {
            const newDefaultIndex: number = isDef(cursor.defaultIndex)
                ? cursor.defaultIndex!
                : +defaultIndex;

            indexesArray.push(newDefaultIndex);

            formatted.push({
                values: cursor.children,
                defaultIndex: newDefaultIndex,
            });

            cursor = cursor.children[newDefaultIndex];
        }

        setIndexes(indexesArray);

        setFormattedColumns(formatted);

        setValues(
            indexesArray.map((item: number, index: number) => formatted[index].values![item].text!),
        );
    }

    // get column instance by index
    const getColumn = (index: number) => {
        return children[index];
    };

    // set options of column by index
    const setColumnValues = (index: number, options: any) => {
        if (!index) {
            return;
        }

        const newFormattedColumns = formattedColumns;
        newFormattedColumns[index] = { values: options };
        setFormattedColumns(newFormattedColumns);
    };

    const onCascadeChange = (index: number) => {
        let cursor: any = { children: columns };

        for (let i = 0; i <= index; i++) {
            cursor = cursor && cursor.children[indexes[i]];
        }

        let newIndex = index;

        while (cursor && cursor.children) {
            newIndex++;
            setColumnValues(newIndex, cursor.children);
            cursor = cursor.children[cursor.defaultIndex || 0];
        }
    };

    const onChange = (index: number, columnIndex: number) => {
        const indexesArray: number[] = indexes;
        let valuesArray: string[] = values;
        indexesArray[index] = columnIndex;

        if (dataType() === 'cascade') {
            onCascadeChange(index);
            valuesArray = indexes.map(
                (item, index) =>
                    (formattedColumns[index] as { values: { text: string }[] }).values[item].text,
            );
        } else {
            valuesArray[index] = (formattedColumns[index] as { values: string[] }).values[
                columnIndex
            ];
        }

        setTimeout(() => {
            // single setState() is sync function
            // inside callback use setState cause parant components update warning
            // use setTimeout to avoid re-render warning
            setCurrentIndex(columnIndex);
            setIndexes([...indexesArray]);
            setValues([...valuesArray]);
        }, 0);

        props.onChange && props.onChange(valuesArray.join(','), indexes.join(','));
    };

    // get column value by index
    const getColumnValue = (index: number) => {
        const column = getColumn(index);
        return column.options[currentIndex];
    };

    // init status, get column value
    const setColumnChildren = (child: any) => {
        setChildren([...children, child]);
    };

    function emit(event: string) {
        if (dataType() === 'text') {
            event === 'onConfirm' &&
                onConfirm &&
                onConfirm(getColumnValue(0), String(currentIndex));
            event === 'onCancel' && onCancel && onCancel();
        } else {
            if (dataType() === 'cascade') {
                setValues(
                    indexes.map(
                        (item, index) =>
                            (formattedColumns[index] as { values: { text: string }[] }).values[item]
                                .text,
                    ),
                );
            }

            event === 'onConfirm' && onConfirm && onConfirm(values.join(','), indexes.join(','));
            event === 'onCancel' && onCancel && onCancel();
        }
    }

    function slots(name?: string): React.ReactElement | string {
        const slots = props.children;

        if (!slots) {
            return '';
        }

        if (name) {
            return Array.isArray(slots)
                ? slots.find((slot) => slot.props.slot === name)
                : slots.props.slot === name && slots;
        }

        return Array.isArray(slots) ? slots.find((slot) => slot.props && !slot.props.slot) : slots;
    }

    function genTitle(): React.ReactElement | string {
        if (slots('title')) {
            return slots('title');
        }

        if (title) {
            return <div className={`${bem('title')} mul-ellipsis`}>{title}</div>;
        }

        return '';
    }

    function genToolbar() {
        if (slots()) {
            return slots();
        }
        if (showToolbar) {
            return (
                <div className={bem('toolbar')}>
                    <button
                        type="button"
                        className={bem('cancel')}
                        onClick={() => {
                            emit('onCancel');
                        }}
                    >
                        {cancelButtonText}
                    </button>
                    {genTitle()}
                    <button
                        type="button"
                        className={bem('confirm')}
                        onClick={() => {
                            emit('onConfirm');
                        }}
                    >
                        {confirmButtonText}
                    </button>
                </div>
            );
        }
        return <div />;
    }

    const genColumnItems = () => {
        return formattedColumns.map((item: any, index: number) => (
            <PickerColumn
                key={index}
                index={index}
                valueKey={valueKey}
                className={item.className}
                allowHtml={allowHtml}
                itemHeight={itemRemHeight()}
                defaultIndex={item.defaultIndex || +defaultIndex}
                swipeDuration={swipeDuration}
                visibleItemCount={visibleItemCount}
                initialOptions={item.values}
                setColumnChildren={setColumnChildren}
                onChange={onChange}
            />
        ));
    };

    const genColumns = () => {
        const wrapHeight = itemRemHeight() * visibleItemCount;

        const frameStyle = { height: `${itemRemHeight()}rem` };
        const columnsStyle = { height: `${wrapHeight}rem` };
        const maskStyle = {
            backgroundSize: `100% ${(wrapHeight - itemRemHeight()) / 2}rem`,
        };

        return (
            <div className={bem('columns')} style={columnsStyle}>
                {genColumnItems()}
                <div className={bem('mask')} style={maskStyle} />
                <div className={`${BORDER_UNSET_TOP_BOTTOM} ${bem('frame')}`} style={frameStyle} />
            </div>
        );
    };

    return (
        <View className={bem()}>
            {toolbarPosition === 'top' && genToolbar()}
            {loading && (
                <div className={bem('loading')}>
                    <Loading />
                </div>
            )}
            {slots('columns-top')}
            {genColumns()}
            {slots('columns-bottom')}
            {toolbarPosition === 'bottom' && genToolbar()}
        </View>
    );
};

export default withDefaultProps(React.memo(Picker), defaultProps);
