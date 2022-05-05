import Router from 'next/router';
import { Select } from 'antd';
import React from 'react';
const { Option } = Select;

export const ErrorHandle = (status: number) => {
    if (status === 500) {
        Router.replace('/error/500');
    } else if (status === 503) {
        Router.replace('/error/503');
    } else if (status === 401) {
        localStorage.removeItem('user');
        window.open('/','_self');
        // Router.replace('/error/401');
    }
};

