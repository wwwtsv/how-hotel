import { FC } from 'react';
import styled from 'styled-components';

const Paragraph = styled.p<{ fontSize: string }>`
  font-family: sans-serif;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.theme.color};
`;

const DefaultText = styled.div<{ fontSize: string }>`
  font-family: 'Roboto', sans-serif;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.theme.color};
`;

const SmallText = styled.small<{ fontSize: string }>`
  font-family: 'Roboto', sans-serif;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.theme.color};
`;

interface TypographyProps {
  fontSize: string;
  type: 'Paragraph' | 'DefaultText' | 'SmallText';
}

const Typography: FC<TypographyProps> = ({ type, fontSize, children }) => {
  switch (type) {
    case 'Paragraph': {
      return <Paragraph fontSize={fontSize}>{children}</Paragraph>;
    }
    case 'SmallText': {
      return <SmallText fontSize={fontSize}>{children}</SmallText>;
    }
    default: {
      return <DefaultText fontSize={fontSize}>{children}</DefaultText>;
    }
  }
};

export default Typography;
