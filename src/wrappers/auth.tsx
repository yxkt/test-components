import { Redirect, useModel } from 'umi'

export default (props: any) => {
  const { user } = useModel('useAuthModel');
  const isLogin = user || sessionStorage.getItem('token')
  if (isLogin) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/403" />;
  }
}

