import Image from 'next/image'
import Information from './information'
import { useState } from 'react'
import { MONSTER } from '@/helpers/monsterInfo'

const MonsterGuide = () => {
  const [chosenMonster, setChosenMonster] = useState(0)

  return (
    <div className="p-4">
      <div className="flex flex-row justify-center flex-wrap gap-4 mb-10">
        {
          MONSTER.map((monster, index) => (
            <div 
              key={monster.name}
              className={`${monster.alias === MONSTER[chosenMonster].alias ? 'border-green-300' : 'border-black'} p-1 border flex items-center justify-center`}
            >
              <Image
                src={`/images/monster/${monster.image_name}`}
                alt={monster.name}
                width={75}
                height={25}
                priority
                onClick={() => setChosenMonster(index)}
              />
            </div>
          ))
        }
      </div>
      <Information monster={MONSTER[chosenMonster]} />
    </div>
  )
}


export default MonsterGuide