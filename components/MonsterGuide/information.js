import Image from 'next/image'
import { PART } from '@/helpers/monsterInfo'


const InformationImageSection = ({title, informationData, type}) => {
  return(
    <section className="border">
      <span>{title}</span>
      <div className="flex flex-row gap-x-1">  
        {informationData.length > 0  ? informationData.map((data) => (
          <Image
          key={data}
          src={`/images/${type}/${data}.png`}
          alt={data}
          width={24}
          height={24}
          priority
        />
        )) : (
          <div>None</div>
        )}
      </div>
    </section>
  )
}

const Information = ({ monster }) => {
  return(
    <div className="flex flex-col gap-y-3">
      <section className="border">
        <InformationImageSection title="弱點屬性" informationData={monster.weaknesses} type="attribute"/>
      </section>
      <section className="border">
        <InformationImageSection title="攻擊屬性" informationData={monster.attack} type="attribute"/>
      </section>
      <section className="border">
        <InformationImageSection title="出現地區" informationData={monster.place} type="place"/>
      </section>
      <section className="border">
        <span>部分破壞</span>
        <div className="flex flex-row gap-x-2">
          {monster.part_destruction.length > 0  ? monster.part_destruction.map((part_destruction) => (
            <span key={part_destruction}>{PART[part_destruction]}</span>
          )) : (
            <div>None</div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Information