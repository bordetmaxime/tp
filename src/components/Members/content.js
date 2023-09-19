// == Import
import './styles.scss';

// == Import des icons
import { GrUserFemale } from '@react-icons/all-files/gr/GrUserFemale';
import { GrUser } from '@react-icons/all-files/gr/GrUser';
import { CgBoy } from '@react-icons/all-files/cg/CgBoy';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMember } from '../../actions/member';

// == Composant du contenu de la page Membres par defaut
const Content = () => {

	const { members, familyName } = useSelector(state => state.family);
	// console.log('members dans members index', members);

	const dispatch = useDispatch();

	const handleClick = (event) => {
		// console.log('event====>', event.target.id);
		dispatch(getMember(event.target.id));
	};

  
	return (
		<div className="content">

			<h2 className='title-member'>Gestion des { familyName }</h2>

			{ members.map((member) => (
				<Link to={ `/member/${ member.member_id }` } key={ member.member_id } id={ member.member_id } className='content__button' onClick={ handleClick } role="button" tabIndex="0" >
					<div id={ member.member_id } className='content__icon'>
						{member.role_label === 'maman' ? <GrUserFemale id={ member.member_id } /> : member.role_label === 'papa' ? <GrUser id={ member.member_id } /> : <CgBoy id={ member.member_id }/>}
					</div>
					<h3 id={ member.member_id }>{member.role_label === 'maman' ? `Maman ${ member.member_firstname }` : member.role_label === 'papa' ? `Papa ${ member.member_firstname }` : member.member_firstname }</h3>
				</Link>
			) )}

		</div>
	);
};

// == Export
export default Content;
