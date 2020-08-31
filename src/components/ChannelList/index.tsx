import React from 'react';

import { 
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RightSide,
  WitheCircle,
} from './styles';

const ChannelList: React.FC = () => {
  const ChannelItem = ()=>(
    <ChannelContainer>
      <LeftSide>
        <Avatar/>
        <Column>
          <Username>rocketseat_oficial</Username>
          <Info>36 news vídeos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WitheCircle/>
      </RightSide>
    </ChannelContainer>
  )
  return (
    <List>
      <ChannelItem />
      <ChannelItem/>
      <ChannelItem/>
      <ChannelItem/>
      <ChannelItem/>
      <ChannelItem/>
      <ChannelItem/>

    </List>
  );
};

export default ChannelList;
