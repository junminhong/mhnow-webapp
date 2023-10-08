'use client'
import { useState } from 'react'
import MonsterGuide from '@/components/MonsterGuide';
import EquipmentGuide from '@/components/EquipmentGuide';

export default function Home() {
  const [showEquipment, setShowEquipment] = useState(true)

  return (
    <div className="relative">
      <div className="border-b mb-5 p-4">
        <span className="text-3xl">Monster Hunter Wiki</span>
      </div>
      <div className="flex fle-row gap-x-3 mb-3 p-4">
        <button className="border text-xl">魔物指南</button>
        <button className="border text-xl">裝備指南</button>
      </div>
      {showEquipment && <EquipmentGuide />}
      <MonsterGuide />
      <div className="absolute w-full h-4 flex justify-center p-2 bottom-0 text-sm">Copyright (C) 2023 Jasper</div>
    </div>
  )
}
