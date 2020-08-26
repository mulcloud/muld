import * as React from 'react';
import { createNS, addUnit, withDefaultProps } from '../utils';
import { View } from './style';

const [bem] = createNS('skeleton');
const DEFAULT_ROW_WIDTH = '100%';
const DEFAULT_LAST_ROW_WIDTH = '60%';

export type NumOrStr = number | string;
export type SkeAvatarShape = 'square' | 'round';
export type SkeRowWidth = number | string | (number | string)[];
export type Props = {
    row: NumOrStr;
    title?: boolean;
    round?: boolean;
    avatar?: boolean;
    loading: boolean;
    animate: boolean;
    avatarSize: string;
    avatarShape: SkeAvatarShape;
    titleWidth: NumOrStr;
    rowWidth: SkeRowWidth;
};
const defaultProps = {
    row: 0 as NumOrStr,
    loading: true,
    animate: true,
    avatarSize: '2rem',
    avatarShape: 'round' as SkeAvatarShape,
    titleWidth: '40%' as NumOrStr,
    rowWidth: DEFAULT_ROW_WIDTH as SkeRowWidth,
};
type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>;
export type SkeletonProps = Props & typeof defaultProps & NativeAttrs;

export const Skeleton: React.FC<React.PropsWithChildren<SkeletonProps>> = (
    props: SkeletonProps,
) => {
    const {
        row,
        avatar,
        avatarSize,
        loading,
        children,
        title,
        animate,
        round,
        rowWidth,
        titleWidth,
        avatarShape,
    } = props;
    if (!loading) {
        return <div>{children}</div>;
    }
    const sketitle = (): React.ReactNode => {
        if (title) {
            return <h3 className={bem('title')} style={{ width: addUnit(titleWidth) }}></h3>;
        }
        return null;
    };
    const skerows = (): React.ReactNode => {
        const Rows = [];
        function getRowWidth(index: number) {
            if (rowWidth === DEFAULT_ROW_WIDTH && index === +row - 1) {
                return DEFAULT_LAST_ROW_WIDTH;
            }
            if (Array.isArray(rowWidth)) {
                return rowWidth[index];
            }
            return rowWidth;
        }
        for (let i = 0; i < row; i++) {
            Rows.push(
                <div key={i} className={bem('row')} style={{ width: addUnit(getRowWidth(i)) }} />,
            );
        }
        return Rows;
    };
    const Avatar = (): React.ReactNode => {
        if (avatar) {
            const size = addUnit(avatarSize);
            return (
                <div style={{ width: size, height: size }} className={bem('avatar', avatarShape)} />
            );
        }
        return null;
    };
    return (
        <View className={bem({ animate, round })}>
            {Avatar()}
            <div className={bem('content')}>
                {sketitle()}
                {skerows()}
            </div>
        </View>
    );
};

export default withDefaultProps(React.memo(Skeleton), defaultProps);
