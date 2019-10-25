import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/core/Avatar';
import { TextField, DateField, ReferenceField, EditButton, ShowButton } from "react-admin";
import React, { Fragment } from 'react';
const cardStyle = {
    width: 300,
    minHeight: 300,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top'
};
const CardView = ({ ids, data, basePath }) => (
    <div style={{ margin: '1em' }}>
    {ids.map(id =>
        <Card key={id} style={cardStyle}>
            <CardHeader
                title={
                    <Fragment>
                    <div>
                        <TextField record={data[id]} source="id" />
                    </div>
                    </Fragment>
                }
                subheader={<TextField record={data[id]} source="createdAt.date" />}
            />
            <CardContent>
            <div>Customer:</div>
            <ReferenceField label="Customer" record={data[id]} basePath={basePath} resource="users" source="userID" reference="users" >
                <TextField source="username" />
            </ReferenceField>
            </CardContent>
            <CardContent>
            <div>Voucher:</div>
                <TextField source="voucher" record={data[id]}/>
            </CardContent>
            <CardContent>
                <TextField source="deliverState" />
            </CardContent>
            <CardActions style={{ textAlign: 'left',display: "inline-block" }}>
                <EditButton resource="posts" basePath={basePath} record={data[id]} />
            </CardActions>
            <CardActions style={{ textAlign: 'right',display: "inline-block" }}>
                <ShowButton resource="posts" basePath={basePath} record={data[id]} />
        </CardActions>
        </Card>
    )}
    </div>
);

export default CardView;