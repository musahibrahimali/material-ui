import React from 'react';
import PeopleOutlineTwoTone from '@material-ui/icons/PeopleOutlineTwoTone';
import { PageHeader, Employees } from '../../index';

function Home() {
    return (
        <>
            <PageHeader
                title={"confidence is the key"}
                subTitle={"The same hammer that shutters the glass forges the steel."}
                icon={<PeopleOutlineTwoTone fontSize="large" />}
            />
            <Employees />
        </>
    )
}

export default Home
