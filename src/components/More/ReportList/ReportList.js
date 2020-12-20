import React from 'react';
import styled from 'styled-components';
import { UIHeaderText, UIText } from 'ui';

export default function MoreReportList() {
    return (
        <ReportListView>
            <MoreReportItem />
        </ReportListView>
    );
}

function MoreReportItem() {
    return (
        <ReportItemView>
            <Title size="h5">?</Title>
            <Date info>2021-1-1</Date>
        </ReportItemView>
    );
}

const ReportListView = styled.div``;

const ReportItemView = styled.div`
    padding: 5px 10px;
    border-bottom: 1px solid #ddd;
`;

const Title = styled(UIHeaderText)``;

const Date = styled(UIText)``;
