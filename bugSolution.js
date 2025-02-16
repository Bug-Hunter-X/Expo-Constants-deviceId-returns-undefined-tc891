import React, { useEffect, useState } from 'react';
import { Constants } from 'expo';

const MyComponent = () => {
  const [deviceId, setDeviceId] = useState(null);

  useEffect(() => {
    async function fetchDeviceId() {
      const id = await Constants.getDeviceIdAsync();
      setDeviceId(id);
    }
    fetchDeviceId();
  }, []);

  return (
    <View>
      {deviceId ? <Text>Device ID: {deviceId}</Text> : <Text>Loading...</Text>}
    </View>
  );
};

export default MyComponent;