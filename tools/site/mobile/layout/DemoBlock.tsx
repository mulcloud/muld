import * as React from 'react';
import styled from 'styled-components';
import { $mul_doc_text_light_blue } from '../../common/style/var';

const View = styled.div`
    &.mul-doc-demo-block {
        &__title {
            margin: 0;
            padding: 32px 16px 16px;
            color: ${$mul_doc_text_light_blue};
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
        }

        &__card {
            margin: 12px 12px 0;
            overflow: hidden;
            border-radius: 8px;
        }

        &__title + &__card {
            margin-top: 0;
        }

        &:first-of-type {
            .mul-doc-demo-block__title {
                padding-top: 20px;
            }
        }
    }
`;
export default function DemoBlock(props: { card: any; title: string; children: any }) {
    const { card, title, children } = props;

    const content = card ? <div className="mul-doc-demo-block__card">{card}</div> : children;
    return (
        <View>
            <h2 v-if="title" className="mul-doc-demo-block__title">
                {{ title }}
            </h2>
            {content}
        </View>
    );
}
