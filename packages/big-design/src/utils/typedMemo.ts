import React, { forwardRef, memo, ForwardRefExoticComponent, PropsWithoutRef, Ref, RefAttributes } from 'react';

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/37087
export const typedMemo: <T>(c: T) => T = memo;

type Test<T, P> = ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;

// export const deini: <T, P>(
//   fn: React.RefForwardingComponent<T, P>
// ) => Test<T, P> = forwardRef;

export const deini: <T, P>(c: any) => Test<T, P> = forwardRef;
