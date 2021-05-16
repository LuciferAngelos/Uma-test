import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./store/usersReducer";
import { Layout, Row, Spin } from 'antd'
import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter } from 'react-router-dom';
import Main from "./components/Main/Main";
import { useEffect, useState } from "react";
import userAvatar from '../src/assets/img/avatar.png'
import useWindowDimensions from "./helpers/getDeviceDimensions";



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])


  const userFullName = useSelector(state => state.usersReducer.users.fullName)
  const profileAvatar = useSelector(state => state.usersReducer.avatarPhoto);
  const profileInstaId = useSelector(state => state.usersReducer.users.extUserUrl);
  const isLoading = useSelector(state => state.usersReducer.isLoading)


  const [dressesCollectionImgId, setDressesCollectionImgId] = useState(null);
  const collectionId = useSelector(state => state.goodsCollectionReducer.collections.list);
  const getCollectionId = collectionId ? collectionId[`${dressesCollectionImgId}`].collagePictId : '';
  const fetchGoodsFromCollection = useSelector(state => state.goodsCollectionReducer.goodsFromCollection.list);
  const getGoodsFromCollection = fetchGoodsFromCollection ? [...fetchGoodsFromCollection] : ''


  const [avatar, setAvatar] = useState(null || userAvatar);
  const [instaId, setInstaId] = useState(null || 'aevsai');
  const [loading, setLoading] = useState(isLoading)

  const { width/* , height  */ } = useWindowDimensions();



  useEffect(() => {
    setAvatar(profileAvatar || userAvatar)
  }, [profileAvatar, avatar])

  useEffect(() => {
    setLoading(isLoading)
  }, [isLoading])

  useEffect(() => {
    setInstaId(profileInstaId)
  }, [profileInstaId])

  useEffect(() => {
    setDressesCollectionImgId(7 /* || handler */)
  }, [dressesCollectionImgId, setDressesCollectionImgId])

  return (

    <BrowserRouter>
      {!loading
        ?
        (<Layout style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', backgroundColor: '#fff', paddingTop: '33px' }}>
          <Row style={{ width: '100%' }}>
            <SideBar avatar={avatar} instaId={instaId} userFullName={userFullName} />
            <Main collectionId={getCollectionId} goodsFromCollection={getGoodsFromCollection} width={width} />
          </Row>
        </Layout>
        )
        :
        (<Spin tip="Loading..." size='large' style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} />)
      }
    </BrowserRouter>

  );
}

export default App;
