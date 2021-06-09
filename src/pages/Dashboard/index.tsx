import React from 'react';

import { FiClock, FiPower } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  Calendar,
  NextAppointments,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { singOut, user } = useAuth();
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />
          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
          <button type="button" onClick={singOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horarios Agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 6</span>
            <span>Segunda-Feira</span>
          </p>
          <NextAppointments>
            <strong>Atendimentos a seguir</strong>
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/34967841?v=4"
                alt="Bobato"
              />
              <strong>Bobato</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointments>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
