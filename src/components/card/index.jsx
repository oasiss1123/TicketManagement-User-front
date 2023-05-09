import { CardStyle } from './styled';

export const CardTheme = ({ title, content, style, ...props }) => {
  return (
    <CardStyle title={title || ''} style={style} {...props}>
      {content}
    </CardStyle>
  );
};
