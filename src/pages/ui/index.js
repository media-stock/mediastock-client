import React from 'react';
import { UIButton, UIHeaderText, UIText, UIInput } from 'ui';

export default function UIPage() {
    return (
        <>
            <UIButton>Button</UIButton>
            <UIButton type="red">Button</UIButton>
            <UIButton type="blue">Button</UIButton>
            <UIButton type="primary">Button</UIButton>

            <UIHeaderText size="h1">Header Text</UIHeaderText>
            <UIHeaderText size="h2">Header Text</UIHeaderText>
            <UIHeaderText size="h3">Header Text</UIHeaderText>
            <UIHeaderText size="h4">Header Text</UIHeaderText>
            <UIHeaderText size="h5">Header Text</UIHeaderText>

            <UIText>UI Text</UIText>
            <UIText type="red">UI Text</UIText>
            <UIText type="blue">UI Text</UIText>
            <UIText type="primary">UI Text</UIText>
            <UIText info>UI Text</UIText>

            <UIInput />
        </>
    );
}
