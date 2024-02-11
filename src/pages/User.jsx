import useGetUser from "../components/User/useGetUser"

export default function User() {

  let {isLoading, data, isError} = useGetUser()

  console.log(isLoading, data, isError)

  if (isLoading)
  return <div>Loading..!</div>

  if (isError)
  return <div>Error...</div>

  return (
    <div style={{fontSize:'xx-large'}}>
        {data?.login}
    </div>
  )
}
