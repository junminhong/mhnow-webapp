
import Image from 'next/image'
import { useState } from 'react'

const WEAPON_LIST_DATA = {
  ONE_HANDED_SWORD: {
    name: 'one-handed-sword'
  },
  LARGE_SWORD: {
    name: 'large-sword'
  },
  LONG_SWORD: {
    name: 'long-sword'
  },
  HAMMER: {
    name: 'hammer'
  },
  LIGHT_BOWGUN: {
    name: 'light-bowgun'
  },
  BOW: {
    name: 'bow'
  }
}

const WEAPON_LIST = Object.keys(WEAPON_LIST_DATA)

const EquipmentGuide = () => {
  const [chosenWeapon, setChosenWeapon] = useState('ONE_HANDED_SWORD')
  // console.log(WEAPON_LIST_DATA[chosenWeapon].name)

  return(
    <div className="flex flex-wrap justify-center gap-x-3">
      {
        WEAPON_LIST.map((weapon) => (
          <div 
            key={WEAPON_LIST_DATA[weapon].name}
            className={`${WEAPON_LIST_DATA[weapon].name === WEAPON_LIST_DATA[chosenWeapon].name ? 'border-green-300' : 'border-black'} p-1 border flex items-center justify-center`}
          >
            <Image
              src={`/images/weapon/${WEAPON_LIST_DATA[weapon].name}.png`}
              alt={WEAPON_LIST_DATA[weapon].name}
              width={36}
              height={36}
              priority
              onClick={() => setChosenWeapon(weapon)}
            />
          </div>
        ))
      }
    </div>
  )
}

export default EquipmentGuide