// == Import
import { useSelector } from 'react-redux';
import './styles.scss';

// == Composant de message de réussite de création de compte
const Message = () => {

	const { errLogin } = useSelector(state => state.user);
  const erreurAddMember = useSelector(state => state.member.erreurAddMember);
	const { inscriptMsgSucces, inscriptionMsgErr } = useSelector(state => state.inscription);
  console.log(erreurAddMember);

	return (
		<div className="message">
			{
				errLogin ? <h2 className='message__error'>{errLogin}</h2> :
        erreurAddMember ? <h2 className='message__error'>{erreurAddMember}</h2> :
					inscriptMsgSucces ? <h2 className='message__succes'>{inscriptMsgSucces}</h2> :
						<h2 className='message__error'>{inscriptionMsgErr}</h2>
			}
		</div>
	);
};

// == Export
export default Message;

