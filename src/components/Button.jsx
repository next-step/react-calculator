/* eslint-disable react/prop-types */
export default function Button({ value }) {
    const onClickFn = (e) => {
        const number = e.target.value
    }
    return <button>{value}</button>;
}
