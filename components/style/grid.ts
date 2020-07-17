import { createGlobalStyle } from 'styled-components';

function generateCol(): string {
    let result: string = '';
    let index = 1;
    while (index <= 24) {
        const _v = ((index * 100) / 24).toFixed(4);
        result += `&--${index} {
            width: ${_v}%;
        }
        &--offset-${index} {
            margin-left: ${_v}%;
        }
        `;
        index++;
    }
    return result;
}

export const col = `
    .mul-col {
        float: left;
        box-sizing: border-box;
        min-height: 1px;
        ${generateCol()}
    }
  `;

export const row = `
    .mul-row {
        &::after {
            display: table;
            clear: both;
            content: '';
        }

        &--flex {
            display: flex;

            &::after {
                display: none;
            }
        }

        &--justify-center {
            justify-content: center;
        }

        &--justify-end {
            justify-content: flex-end;
        }

        &--justify-space-between {
            justify-content: space-between;
        }

        &--justify-space-around {
            justify-content: space-around;
        }

        &--align-center {
            align-items: center;
        }

        &--align-bottom {
            align-items: flex-end;
        }
    }
`;

export const Grid = createGlobalStyle`${row}${col}`;
