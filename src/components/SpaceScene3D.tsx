"use client";

import { Canvas } from 'react-three-fiber';
import { useState, useEffect, FC } from 'react';
import { StarData } from '../types/types';
import Coin3D from '../threeJs/Coin3D'
import { getSubnetBlockData } from '@/util/AvascanDataFetchUtil';

const SpaceScene: FC = () => {
  const [blockData, setBlockData] = useState<StarData[]>([]);

  useEffect(() => {
    async function loadStars() {
      const fetchedData = await getSubnetBlockData();
      setBlockData(fetchedData);
    }

    loadStars();
  }, []);

  return (
    <div>
        <p>return {JSON.stringify(blockData, null, 2)}</p>
        <Coin3D/>
    </div>
  );
};

interface StarsProps {
  data: StarData[];
}

const Stars: FC<StarsProps> = ({ data }) => {
  return (
    <>
      {data.map((datum, index) => (
        <mesh key={index} position={[datum.chain_name, datum.chain_logo, datum.transaction_num]}>
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="white" />
        </mesh>
      ))}
    </>
  );
};

export default SpaceScene;