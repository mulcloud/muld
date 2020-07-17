import * as React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import * as style from '../../common/style/var';

export default function Content(props: any) {
    const currentPage = () => {
        const route = window.location.hash.match(/(?:\/(.+))?\/(.+)/);
        if (route) {
            return route[2];
        }
    };
    return (
        <View className={classnames(['mul-doc-content', `mul-doc-content--${currentPage()}`])}>
            {props.children}
        </View>
    );
}

const View = styled.div`
    &.mul-doc-content {
        position: relative;
        flex: 1;
        padding: 0 0 75px;

        .card {
            margin-bottom: 24px;
            padding: 24px;
            background-color: #fff;
            border-radius: ${style.$mul_doc_border_radius};
            box-shadow: 0 8px 12px #ebedf0;
        }

        a {
            margin: 0 1px;
            color: ${style.$mul_doc_blue};
            -webkit-font-smoothing: auto;

            &:hover {
                color: darken(${style.$mul_doc_blue}, 10%);
            }

            &:active {
                color: darken(${style.$mul_doc_blue}, 20%);
            }
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            color: ${style.$mul_doc_black};
            font-weight: normal;
            line-height: 1.5;

            &[id] {
                cursor: pointer;
            }
        }

        h1 {
            margin: 0 0 30px;
            font-size: 30px;
            cursor: default;
        }

        h2 {
            margin: 45px 0 20px;
            font-size: 22px;
        }

        h3 {
            margin-bottom: 16px;
            font-weight: 500;
            font-size: 18px;
        }

        h4 {
            margin: 24px 0 12px;
            font-weight: 500;
            font-size: 15px;
        }

        h5 {
            margin: 24px 0 12px;
            font-weight: 500;
            font-size: 14px;
        }

        p {
            color: ${style.$mul_doc_text_color};
            font-size: 14px;
            line-height: 26px;
        }

        table {
            width: 100%;
            margin-top: 12px;
            color: ${style.$mul_doc_text_color};
            font-size: 13px;
            line-height: 1.5;
            border-collapse: collapse;

            th {
                padding: 8px 10px;
                font-weight: 500;
                text-align: left;

                &:first-child {
                    padding-left: 0;
                }

                &:last-child {
                    padding-right: 0;
                }
            }

            td {
                padding: 8px;
                border-top: 1px solid ${style.$mul_doc_code_background_color};

                &:first-child {
                    padding-left: 0;

                    // version tag
                    code {
                        margin: 0;
                        padding: 2px 6px;
                        color: ${style.$mul_doc_blue};
                        font-weight: 500;
                        font-size: 10px;
                        background-color: fade(${style.$mul_doc_blue}, 10%);
                        border-radius: 20px;
                    }
                }

                &:last-child {
                    padding-right: 0;
                }
            }

            em {
                color: ${style.$mul_doc_green};
                font-size: 12.5px;
                font-family: ${style.$mul_doc_code_font_family};
                font-style: normal;
                -webkit-font-smoothing: auto;
            }
        }

        ul li,
        ol li {
            position: relative;
            margin: 5px 0 5px 10px;
            padding-left: 15px;
            color: ${style.$mul_doc_text_color};
            font-size: 14px;
            line-height: 26px;

            &::before {
                position: absolute;
                top: 0;
                left: 0;
                box-sizing: border-box;
                width: 6px;
                height: 6px;
                margin-top: 10px;
                border: 1px solid ${style.$mul_doc_dark_grey};
                border-radius: 50%;
                content: '';
            }
        }

        hr {
            margin: 30px 0;
            border: 0 none;
            border-top: 1px solid #eee;
        }

        p > code,
        li > code,
        table code {
            display: inline;
            margin: 2px 3px;
            padding: 2px 5px;
            font-size: 13px;
            font-family: inherit;
            word-break: keep-all;
            background-color: #f0f2f5;
            border-radius: 4px;
            -webkit-font-smoothing: antialiased;
        }

        p > code {
            font-size: 14px;
        }

        section {
            padding: 30px;
            overflow: hidden;
        }

        blockquote {
            margin: 20px 0 0;
            padding: 16px;
            color: rgba(52, 73, 94, 0.8);
            font-weight: 500;
            font-size: 14px;
            background-color: #ecf9ff;
            border-radius: ${style.$mul_doc_border_radius};
        }

        img {
            width: 100%;
            margin: 16px 0;
            border-radius: ${style.$mul_doc_border_radius};
        }

        &--changelog {
            strong {
                display: block;
                margin: 24px 0 12px;
                font-weight: 500;
                font-size: 15px;
            }

            h3 {
                + p code {
                    margin: 0;
                }

                a {
                    color: inherit;
                    font-size: 20px;
                }
            }
        }
    }
`;
