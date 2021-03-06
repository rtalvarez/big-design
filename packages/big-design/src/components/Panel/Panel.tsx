import React from 'react';

import { MarginProps } from '../../mixins';

import { StyledPanel } from './styled';

export type PanelProps = React.HTMLAttributes<HTMLElement> & MarginProps;

export const RawPanel: React.FC<PanelProps> = props => (
  <StyledPanel
    marginBottom="medium"
    {...props}
    backgroundColor="white"
    shadow="raised"
    padding={{ mobile: 'medium', tablet: 'xxLarge' }}
  />
);

export const Panel: React.FC<PanelProps> = ({ className, style, ...props }) => <RawPanel {...props} />;
