import {usePullDown, usePullDownDispatch } from "../context/UserContext"

const TargetCheckBox = () => {

    const checkbox = usePullDown()
    const setCheckbox = usePullDownDispatch()

    const changeDispType = (e) => {
        const newCheckBoxes = checkbox.map(type => {
          const newType = {...type}
          if (newType.name === e.target.value) {
            newType.dispFlg = !type.dispFlg
          }
          return newType
        })
        setCheckbox(newCheckBoxes)
      }

    return (
        <>
            <p>【表示対象】を下記から選択</p>
            {
                checkbox.map(type => {
                    return (
                        <label key={type.key}>
                            <input type="checkbox" value={type.name} onChange={changeDispType} checked={type.dispFlg}/>{type.name}
                        </label>
                    )
                })
            }
        </>
    )
}

export default TargetCheckBox