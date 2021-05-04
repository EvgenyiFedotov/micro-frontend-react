import { Button, Input, notification, Space } from "antd";
import { getLinkToken, useLink } from "api/auth";
import React, { FC, useState } from "react";

export const Link: FC = () => {
  return (
    <Space direction="vertical">
      <GetToken />
      <UseToken />
    </Space>
  );
};

const GetToken: FC = () => {
  const [token, setToken] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const getToken = () => {
    getLinkToken(password).then(({ data }) => setToken(data));
  };

  return (
    <Space>
      <Input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.currentTarget.value)} />
      <div>{token}</div>
      <Button onClick={getToken}>Get token</Button>
    </Space>
  )
};

const UseToken: FC = () => {
  const [token, setToken] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const send = () => {
    useLink(token, password).then(() => {
      notification.success({
        message: "Accounts linked",
        placement: "bottomLeft",
      });
    });
  };

  return (
    <Space>
      <Input placeholder="Token" value={token} onChange={(event) => setToken(event.currentTarget.value)} />
      <Input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.currentTarget.value)} />
      <Button onClick={send}>Send</Button>
    </Space>
  );
};
