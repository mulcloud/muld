/* eslint-disable react/jsx-no-target-blank */
import * as React from 'react';
import styled from 'styled-components';
import {
    $mul_doc_padding,
    $mul_doc_header_top_height,
    $mul_doc_border_radius,
} from '../../common/style/var';

export default function Header({ config, lang }: { config: Record<string, any>; lang: string }) {
    const { links, logo, title } = config;
    let linksContent: any;
    if (links.length > 0) {
        linksContent = links.map((item, index) => (
            <li key={index} className="mul-doc-header__top-nav-item">
                <a className="mul-doc-header__logo-link" target="_blank" href={item.url}>
                    {/* <img src={item.logo} /> */}
                    <svg
                        className="octicon-mark-github"
                        height="26"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="26"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                        ></path>
                    </svg>
                </a>
            </li>
        ));
    }
    return (
        <View className="mul-doc-header">
            <div className="mul-doc-row">
                <div className="mul-doc-header__top">
                    <a className="mul-doc-header__logo">
                        <img src={logo} />
                        <span>{title}</span>
                    </a>
                    <ul className="mul-doc-header__top-nav">{linksContent}</ul>
                </div>
            </div>
        </View>
    );
}

const View = styled.div`
    &.mul-doc-header {
        width: 100%;
        background-color: #001938;
        user-select: none;

        .mul-doc-header__top {
            display: flex;
            align-items: center;
            height: ${$mul_doc_header_top_height};
            padding: 0 ${$mul_doc_padding};
            line-height: ${$mul_doc_header_top_height};

            &-nav {
                flex: 1;
                font-size: 0;
                text-align: right;

                > li {
                    position: relative;
                    display: inline-block;
                    vertical-align: middle;
                }

                &-item {
                    margin-left: 20px;
                }

                &-title {
                    display: block;
                    font-size: 15px;
                }
            }
        }

        .mul-doc-header__cube {
            position: relative;
            display: block;
            padding: 0 12px;
            color: #fff;
            font-size: 14px;
            font-family: 'Helvetica Neue', Arial, sans-serif;
            line-height: 24px;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.7);
            border-radius: 20px;
            cursor: pointer;
            transition: 0.3s ease-in-out;
        }

        .mul-doc-header__version {
            padding-right: 20px;

            &::after {
                position: absolute;
                top: 7px;
                right: 7px;
                width: 5px;
                height: 5px;
                color: rgba(255, 255, 255, 0.9);
                border: 1px solid;
                border-color: transparent transparent currentColor currentColor;
                transform: rotate(-45deg);
                content: '';
            }

            &-pop {
                position: absolute;
                top: 30px;
                right: 0;
                left: 0;
                z-index: 99;
                color: #333;
                line-height: 36px;
                text-align: left;
                background-color: #fff;
                border-radius: ${$mul_doc_border_radius};
                box-shadow: 0 4px 12px #ebedf0;
                transform-origin: top;
                transition: 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);

                &-item {
                    padding-left: 12px;
                    transition: 0.2s;

                    &:hover {
                        color: $mul_doc_blue;
                    }
                }
            }
        }

        .mul-doc-header__logo {
            display: block;

            img,
            span {
                display: inline-block;
                vertical-align: middle;
            }

            img {
                width: 24px;
                margin-right: 10px;
            }

            span {
                color: #fff;
                font-size: 22px;
            }
        }

        .mul-doc-header__logo-link {
            img {
                display: block;
                width: 26px;
                height: 26px;
                transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

                &:hover {
                    transform: scale(1.2);
                }
            }
            .octicon-mark-github {
                display: inline-block;
                vertical-align: middle;
                color: #fff;
                fill: currentColor;
                &:hover {
                    transform: scale(1.2);
                }
            }
        }
        .mul-doc-dropdown {
            &-enter,
            &-leave-active {
                transform: scaleY(0);
                opacity: 0;
            }
        }
    }
`;
