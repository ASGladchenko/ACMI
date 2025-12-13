'use client';

import { useState } from 'react';

import { Input, Button } from '@/components';

import { useLeonConnect } from './api';

export const IntegrationsForm = () => {
  const [id, setId] = useState('');

  const { isLoading, connect } = useLeonConnect();

  return (
    <div className="flex flex-col gap-6">
      <Input label="Enter your Leon`s id " value={id} onChange={(value) => setId(value)} />

      <Button disabled={!id} loading={isLoading} onClick={() => connect(id)}>
        Connect
      </Button>
    </div>
  );
};
