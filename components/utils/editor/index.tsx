import * as React from 'react';
import styled from 'styled-components';
import CodeMirror from 'codemirror';

import 'codemirror/mode/jsx/jsx';
import 'codemirror/keymap/sublime';
import 'codemirror/addon/comment/comment';

import 'codemirror/lib/codemirror.css';

export default function Editor({
    value,
    onChange,
}: {
    value: string;
    onChange?: (e: any) => void;
}) {
    const editorRef = React.useRef(null);
    let cm: any;
    let timeout: any;
    React.useEffect(() => {
        cm = CodeMirror(editorRef, {
            mode: 'jsx',
            theme: 'react',
            keyMap: 'sublime',
            viewportMargin: Infinity,
            lineNumbers: false,
            dragDrop: false,
        });
        cm.setValue(value);
        cm.on('changes', (cm) => {
            if (onChange) {
                clearTimeout(timeout);

                timeout = setTimeout(() => {
                    onChange(cm.getValue());
                }, 300);
            }
        });
    }, []);
    return <View className="mul-doc-editor" ref={editorRef} />;
}

const View = styled.div`
    &.mul-doc-editor {
        .CodeMirror {
            font-family: 'source-code-pro', Menlo, 'Courier New', Consolas, monospace;
            font-size: 13px;
            line-height: 20px;
            color: #484848;
            padding: 15px 0;
            border-right: 1px solid #eaeefb;
            z-index: 0;
            height: auto;
            background: transparent;

            .CodeMirror-gutters {
                background: transparent;
                border-right: 0px;
                z-index: 0;
            }

            .CodeMirror-selected {
                background: #e6effb;
            }

            pre {
                padding: 0 25px;
            }

            span.cm-keyword {
                color: #1990b8;
            }
            span.cm-atom {
                color: #c92c2c;
            }
            span.cm-number {
                color: #c92c2c;
            }
            span.cm-variable {
                color: black;
            }
            span.cm-variable-2 {
                color: #0000c0;
            }
            span.cm-variable-3 {
                color: #0000c0;
            }
            span.cm-property {
                color: black;
            }
            span.cm-operator {
                color: black;
            }
            span.cm-comment {
                color: #7d8b99;
            }
            span.cm-string {
                color: #2f9c0a;
            }
            span.cm-string-2 {
                color: #2f9c0a;
            }
            span.cm-link {
                color: #c92c2c;
            }
        }
    }
`;
