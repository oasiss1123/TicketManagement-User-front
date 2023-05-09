import { useEffect, useState } from 'preact/hooks';

export const useGetOptions = () => {
  const [optionsGender, setOptionsGender] = useState([]);
  const [optionsJob, setOptionsJob] = useState([]);

  useEffect(() => {
    onFetchOptionsGender();
    onFetchOptionsJob();
  }, []);

  const onFetchOptionsGender = async () => {
    // CALL API
    setOptionsGender([
      {
        label: 'ชาย',
        value: 'M',
      },
      {
        label: 'หญิง',
        value: 'F',
      },
    ]);
  };

  const onFetchOptionsJob = async () => {
    // CALL API
    setOptionsJob([
      {
        jobId: 'JB-001',
        jobName: 'โปรแกรมเมอร์',
      },
      {
        jobId: 'JB-002',
        jobName: 'บัญชี',
      },
    ]);
  };

  return {
    optionsJob,
    optionsGender,
  };
};
