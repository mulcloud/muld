import * as React from 'react';
import styled from 'styled-components';
import DemoSection from '@trillion/muld-tools/site/mobile/layout/DemoSection';
import List from '..';
import { $gray7 } from '../../style/var';
import Cell from '../../cell';

// tab1
export default function ListDemo(): React.ReactNode {
    const [loading, setLoading] = React.useState(false);
    const [finished, setFinished] = React.useState(false);
    const [data, setData] = React.useState<Array<string | number>>([]);
    const onLoad = (): void => {
        if (data.length > 100) {
            setFinished(true);
            return;
        }
        setLoading(true);
        setTimeout(() => {
            for (let i = 0; i < 20; i++) {
                const text: number | string = data.length + 1;
                data.push(text < 10 ? `0${text}` : text);
            }
            setData(data);
            setLoading(false);
        }, 1000);
    };

    const renderData = (): React.ReactNodeArray => {
        return data.map((item: number | string) => {
            return <Cell key={item} title={item} />;
        });
    };

    return (
        <View className="demo-list">
            <List loading={loading} finished={finished} finishedText="没有更多了" onLoad={onLoad}>
                {renderData()}
            </List>
        </View>
    );
}

// TODO: tab 组件做demo 切换
/* export default function ListDemo(): React.ReactNode {
    const [loading, setLoading] = React.useState(false);
    const [finished, setFinished] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [data, setData] = React.useState<Array<string | number>>([]);

    const onLoad = (): void => {
        if (data.length > 100) {
            setFinished(true);
            return;
        }
        setLoading(true);

        setTimeout(() => {
            for (let i = 0; i < 20; i++) {
                const text: number | string = data.length + 1;
                data.push(text < 10 ? `0${text}` : text);
            }
            if (data.length === 20 && !error) {
                setError(true);
            } else {
                setError(false);
            }
            setData(data);
            setLoading(false);
        }, 1000);
    };

    const renderData = (): React.ReactNodeArray => {
        return data.map((item: number | string) => {
            return <Cell key={item} title={item} />;
        });
    };

    return (
        <View className="demo-list">
            <List
                loading={loading}
                finished={finished}
                error={error}
                errorText="加载有误，点击刷新"
                onLoad={onLoad}
            >
                {renderData()}
            </List>
        </View>
    );
} */

const View = styled(DemoSection)`
    &.demo-list {
        .mul-cell {
            text-align: center;
        }

        .page-desc {
            margin: 0;
            padding: 5px 0;
            color: ${$gray7};
            font-size: 14px;
            text-align: center;

            &--text {
                margin: 0;
            }

            &--option {
                margin: 12px;
            }
        }

        .mul-checkbox__label {
            color: ${$gray7};
        }
    }
`;
