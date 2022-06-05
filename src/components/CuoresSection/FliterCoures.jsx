import React from 'react';
import { Select } from 'antd';

export default function FliterCoures() {
    return (
        <div className="row">
            <div className="col-md-3 col-6 mb-3 mb-md-0">
                <h4 className="mb-3">Categories</h4>
                <Select defaultValue="lucy" className="w-100">
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="lucy">Lucy</Select.Option>
                </Select>
            </div>
            <div className="col-md-3 col-6 mb-3 mb-md-0">
                <h4 className="mb-3">Level</h4>
                <Select defaultValue="lucy" className="w-100">
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="lucy">Lucy</Select.Option>
                </Select>
            </div>
            <div className="col-md-3 col-6 mb-3 mb-md-0">
                <h4 className="mb-3">Language</h4>
                <Select defaultValue="lucy" className="w-100">
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="lucy">Lucy</Select.Option>
                </Select>
            </div>
            <div className="col-md-3 col-6 mb-3 mb-md-0">
                <h4 className="mb-3">Instructor</h4>
                <Select defaultValue="lucy" className="w-100">
                    <Select.Option value="jack">Jack</Select.Option>
                    <Select.Option value="lucy">Lucy</Select.Option>
                </Select>
            </div>
        </div>
    );
}
