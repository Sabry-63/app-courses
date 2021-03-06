import React, { useEffect, useState } from 'react';
import { Radio } from 'antd';
import axios from 'axios';

export default function FliterCoures({
    setCoures,
    setPage,
    page,
    setTotal,
    setLoadingData,
}) {
    const [checked, setChecked] = useState('');

    useEffect(() => {
        setLoadingData(true);
        axios
            .get(`/coures?${checked}`, {
                params: {
                    _limit: 9,
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            })
            .then((res) => {
                setCoures(res.data);
                setPage(page);
                setTotal(res.headers['x-total-count']);
            })
            .then(() => {
                window.scrollTo({ top: 0 });
                setLoadingData(false);
            });
    }, [checked, page]);

    return (
        <Radio.Group defaultValue="">
            <Radio
                value=""
                onChange={(e) => setChecked(e.target.value)}
                checked
            >
                All
            </Radio>
            <br />
            <Radio
                value="&category=UI/UX"
                onChange={(e) => setChecked(e.target.value)}
            >
                UI/UX
            </Radio>
            <br />
            <Radio
                value="&category=Mobile"
                onChange={(e) => setChecked(e.target.value)}
            >
                Mobile
            </Radio>
            <br />
            <Radio
                value="&category=Design"
                onChange={(e) => setChecked(e.target.value)}
            >
                Design
            </Radio>
            <br />
            <Radio
                value="&category=Web Development"
                onChange={(e) => setChecked(e.target.value)}
            >
                Web Development
            </Radio>
        </Radio.Group>
    );
}
