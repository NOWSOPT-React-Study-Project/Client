import React from 'react';
import { useTheme } from '../../context/theme';
import { hexToRGBA } from '../../utils/hexToRGBA';
import { BoxStyleProps, getBoxStyle } from './ContentBox.style';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  styles?: BoxStyleProps;
  variant?: 'default' | 'content';
  isFocus?: boolean;
  isExceed?: boolean;
  handleClick?: () => void;
}

const ContentBox = ({
  children,
  styles = {},
  variant = 'default',
  handleClick,
  isFocus,
  isExceed,
}: BoxProps) => {
  const { theme } = useTheme();
  const customStyle = {
    default: {
      width: '50vh',
      height: '60vh',
      padding: '1.2rem',

      borderRadius: '2rem',
      backgroundColor: hexToRGBA({ hex: theme.bgColor, opacity: 0.589 }),
      color: theme.textColor,
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      
      borderRadius: '0.5rem',
      backgroundColor: theme.bgColor,
      color: theme.textColor,
      border:
        isFocus && !isExceed
          ? `1.5px solid ${theme.point2Color}`
          : isFocus && isExceed
            ? `1.5px solid ${theme.redBorderColor}`
            : `1.5px solid transparent`,
    },
  };

  return <div css={getBoxStyle({ ...customStyle[variant], ...styles })} onClick={handleClick}>{children}</div>;
};

export default ContentBox;
