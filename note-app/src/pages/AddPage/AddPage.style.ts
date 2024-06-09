import { css } from '@emotion/react';

export const pageWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const titleWrapper = css``;

export const titleInputWrapper = css`
  width: 100%;
  height: 100%;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  &:focus {
    outline: none;
  }
`;
