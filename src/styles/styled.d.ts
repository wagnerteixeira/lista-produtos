import 'styled-components';

declare module 'styled-components' {
  export interface IDefaultTheme {
    colors: {
      v1: string;
      v2: string;
    }
  }
}
