/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, useEffect } from 'react';

import { createNS, isDef, withDefaultProps } from '../utils';

import { BORDER_UNSET_TOP_BOTTOM } from '../utils/constant';

import { unitToPx } from '../utils/format/addUnit';
import { View } from './style';

import Loading from '../loading';
import { PickerColumn } from './PickerColumn';

const [bem] = createNS('picker');
export const DEFAULT_ITEM_HEIGHT = 44;

export type ColumnObject = {
    values: (string | ColumnObject | string | { values: string })[];
};
export type Column =
    | ColumnObject
    | string
    | { values?: string; children?: []; defaultIndex?: number };

export type Columns = Column[];

export interface PropsType {
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
    columns: Columns | string;
    toolbarPosition?: string;
    valueKey?: string;
    onChange?: (value: string | number, index: number) => void | string;
    onConfirm?: (value: string | number, index: number) => void | string;
    onCancel?: () => void;
    children?: React.ReactElement;
}

const defaultProps = {
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
    columns: [] as Columns | string,
    toolbarPosition: 'top',
    valueKey: 'text',
};

type PickerPropsType = PropsType & typeof defaultProps;

const Picker: React.FC<PickerPropsType> = (props: PickerPropsType) => {
    const {
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

    const [children, setChildren] = useState([] as any[]);

    function format() {
        if (dataType() === 'text') {
            setFormattedColumns([{ values: columns as string }]);
        } else if (dataType() === 'cascade') {
            formatCascade();
        } else {
            setFormattedColumns(columns as Column[]);
        }
    }

    useEffect(() => {
        format();
    }, [columns]);

    function itemPxHeight(): number {
        return itemHeight ? unitToPx(itemHeight) : DEFAULT_ITEM_HEIGHT;
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
        const formatted = [];

        let cursor: any = {
            children: columns,
            defaultIndex: undefined as number | undefined,
        };

        while (cursor && cursor.children) {
            const newDefaultIndex: number = isDef(cursor.defaultIndex)
                ? cursor.defaultIndex!
                : +defaultIndex;

            formatted.push({
                values: cursor.children,
                defaultIndex: newDefaultIndex,
            });

            cursor = cursor.children[newDefaultIndex];
        }

        setFormattedColumns(formatted);
    }

    // @exposed-api
    // get indexes of all columns
    const getIndexes = () => {
        return children.map((child: any) => child.currentIndex);
    };

    // get column instance by index
    const getColumn = (index: number) => {
        return children[index];
    };

    // @exposed-api
    // set options of column by index
    const setColumnValues = (index: number, options: any) => {
        const column = children[index];

        if (column) {
            // Todo: have no effect?
            column.updateOptions(options);
        }
    };

    const getColumnChangeValue = (index: number, columnIndex: number) => {
        const column = getColumn(index);
        return column.options[columnIndex];
    };

    const onCascadeChange = (columnIndex: number) => {
        let cursor: any = { children: columns };
        let newColumnIndex = columnIndex;
        const indexes = getIndexes();

        for (let i = 0; i <= columnIndex; i++) {
            cursor = cursor && cursor.children[indexes[i]];
        }

        while (cursor && cursor.children) {
            newColumnIndex++;
            setColumnValues(newColumnIndex, cursor.children);
            cursor = cursor.children[cursor.defaultIndex || 0];
        }
    };

    const onChange = (columnIndex: number) => {
        if (dataType() === 'cascade') {
            onCascadeChange(columnIndex);
        }

        // inside callback use setState cause update warning.
        // add setTimeout avoid setState warning.
        setTimeout(() => {
            setCurrentIndex(columnIndex);
        }, 0);

        props.onChange && props.onChange(getColumnChangeValue(0, columnIndex), columnIndex);
    };

    // @exposed-api
    // get column option index by column index
    // const getColumnIndex = (columnIndex: number) => {
    //     return (getColumn(columnIndex) || {}).currentIndex;
    // };

    // @exposed-api
    // get values of all columns
    const getValues = () => {
        // eslint-disable-next-line no-console
        return children.map((child) => console.log('12', child));
    };

    // todo: exposed ref api
    // @exposed-api
    // set column value by index
    // const setColumnValue = (index: number, value: any) => {
    //     const column = getColumn(index);

    //     if (column) {
    //         column.setValue(value);

    //         if (dataType() === 'cascade') {
    //             onCascadeChange(index);
    //         }
    //     }
    // };

    // @exposed-api
    // set column option index by column index
    // const setColumnIndex = (columnIndex: number, optionIndex: number) => {
    //     const column = getColumn(columnIndex);

    //     if (column) {
    //         column.setIndex(optionIndex);

    //         if (dataType() === 'cascade') {
    //             onCascadeChange(columnIndex);
    //         }
    //     }
    // };

    // @exposed-api
    // get options of column by index
    // const getColumnValues = (index: number) => {
    //     return (children[index] || {}).options;
    // };

    // @exposed-api
    // set values of all columns
    // const setValues = (values) => {
    //     values.forEach((value, index) => {
    //         setColumnValue(index, value);
    //     });
    // };

    // @exposed-api
    // set indexes of all columns
    // const setIndexes = (indexes) => {
    //     indexes.forEach((optionIndex, columnIndex) => {
    //         setColumnIndex(columnIndex, optionIndex);
    //     });
    // };

    // @exposed-api
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
            event === 'onConfirm' && onConfirm && onConfirm(getColumnValue(0), currentIndex);
            event === 'onCancel' && onCancel && onCancel();
        } else {
            let values: any = getValues();

            if (dataType() === 'cascade') {
                values = values.map((item: any) => item[valueKey]);
            }

            event === 'onConfirm' && onConfirm && onConfirm(values, currentIndex);
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
        return formattedColumns.map((item: any, columnIndex: number) => (
            <PickerColumn
                key={columnIndex}
                valueKey={valueKey}
                className={item.className}
                allowHtml={allowHtml}
                itemHeight={itemPxHeight()}
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
        const wrapHeight = itemPxHeight() * visibleItemCount;

        const frameStyle = { height: `${itemPxHeight()}px` };
        const columnsStyle = { height: `${wrapHeight}px` };
        const maskStyle = {
            backgroundSize: `100% ${(wrapHeight - itemPxHeight()) / 2}px`,
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
