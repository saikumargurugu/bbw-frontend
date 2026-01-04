
type navBarTypes = {
    label: string;
    href: string;
  }
  export type InfoBarButton = {
    label: string;
    url: string;
    newTab?: boolean;
  };

  export type InfoBar = {
    text: string;
    buttons: InfoBarButton[];
  };

  export type ThemeStyle = {
    font?: {
      description?: {
        style?: {
          fontFamily?: string;
        };
      };
    };
    sharpButton?: {
      style?: {
        background?: string;
        color?: string;
        fontFamily?: string;
      };
    };
  };

  type layOutProps = {
    navLinks: navBarTypes[];
    fotterText: string;
    infoBar?: InfoBar;
    theme?: ThemeStyle;
  };
  
  export type {
    navBarTypes,
    layOutProps
  }