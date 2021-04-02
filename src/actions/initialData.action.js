import {
	courseConstants,
	categoryConstants,
	profsConstants,
	adminsConstants,
	bannerConstants,
	aboutIntroConstants,
	actionConstants,
	actionContentConstants,
	donationConstants,
	historyAboutConstants,
	whyLearnConstants,
	whyLearnIntroConstants,
	sponsorConstants,
	testimonialConstants,
	homeHeaderConstants,
	topSubjectTitleConstants,
	addressConstants,
	logoAndDescConstants,
	whyTeachIntroConstants,
	whyTeachConstants,
	blogTitleConstants,
	coursTitleConstants,
	profsTitleConstants,
	sponsorsTitleConstants
} from './constants';
import { axiosInstance as axios } from '../helpers/axios';

export const initialData = () => {

	return async (dispatch) => {
		const res = await axios.post('/initialdata');
		if (res.status === 200) {
			const {
				categories,
				courses,
				admins,
				profs,
				banners,
				aboutIntro,
				action,
				actionContent,
				donation,
				historyAbout,
				sponsors,
				testimonials,
				brandImages,
				homeHeader,
				topSubjects,
				topSubjectTitle,
				whyLearn,
				whyLearnIntro,
				addressContact,
				logoAndDescription,
				whyTeach,
				whyTeachIntro,
				blogTitle,
				coursTitle,
				profsTitle,
				sponsorsTitle,
				numberCourse,
				adminsNumber,
				profsNumber
			} = res.data;
			
			dispatch({
				type: courseConstants.GET_ALL_COURSE_SUCCESS, payload: {
					courses
				}
			});

			dispatch({
				type: courseConstants.GET_ALL_COURSE_NUMBER_SUCCESS, payload: {
					numberCourse
				}
			});

			dispatch({
				type: categoryConstants.GET_ALL_CATEGORY_SUCCESS, payload: {
					categories
				}
			});

			dispatch({
				type: profsConstants.GET_PROFS_SUCCESS, payload: {
					profs
				}
			});

			dispatch({
				type: profsConstants.GET_PROFS_NUMBER_SUCCESS, payload: {
					profsNumber
				}
			});

			dispatch({
				type: adminsConstants.GET_ADMIN_SUCCESS, payload: {
					admins
				}
			});

			dispatch({
				type: adminsConstants.GET_ADMIN_NUMBER_SUCCESS, payload: {
					adminsNumber
				}
			});

			dispatch({
				type: bannerConstants.GET_BANNERS_SUCCESS, payload: {
					banners
				}
			});

			dispatch({
				type: aboutIntroConstants.GET_ABOUT_INTRO_SUCCESS, payload: {
					aboutIntro
				}
			});

			dispatch({
				type: actionConstants.GET_ACTION_SUCCESS, payload: {
					action
				}
			});

			dispatch({
				type: actionContentConstants.GET_ACTION_CONTENT_SUCCESS, payload: {
					actionContent
				}
			});

			dispatch({
				type: donationConstants.GET_DONATION_SUCCESS, payload: {
					donation
				}
			});

			dispatch({
				type: historyAboutConstants.GET_HISTORY_ABOUT_SUCCESS, payload: {
					historyAbout
				}
			});

			dispatch({
				type: sponsorConstants.GET_SPONSOR_SUCCESS, payload: {
					sponsors
				}
			});

			dispatch({
				type: testimonialConstants.GET_TESTIMONIAL_SUCCESS, payload: {
					testimonials
				}
			});


			dispatch({
				type: homeHeaderConstants.GET_HOME_HEADER_SUCCESS, payload: {
					homeHeader
				}
			});

			dispatch({
				type: topSubjectTitleConstants.GET_TOP_SUBJECT_TITLE_SUCCESS, payload: {
					topSubjectTitle
				}
			});

			dispatch({
				type: whyLearnConstants.GET_WHY_LEARN_SUCCESS, payload: {
					whyLearn
				}
			});

			dispatch({
				type: whyLearnIntroConstants.GET_WHY_LEARN_INTRO_SUCCESS, payload: {
					whyLearnIntro
				}
			});

			dispatch({
				type: whyTeachConstants.GET_WHY_TEACH_SUCCESS, payload: {
					whyTeach
				}
			});

			dispatch({
				type: whyTeachIntroConstants.GET_WHY_TEACH_INTRO_SUCCESS, payload: {
					whyTeachIntro
				}
			});

			dispatch({
				type: addressConstants.GET_ADDRESS_SUCCESS, payload: {
					addressContact
				}
			});

			dispatch({
				type: logoAndDescConstants.GET_LOGO_AND_DESC_SUCCESS, payload: {
					logoAndDescription
				}
			});
			dispatch({
				type: blogTitleConstants.GET_BLOG_TITLE_SUCCESS, payload: {
					blogTitle
				}
			});
			dispatch({
				type: coursTitleConstants.GET_COURS_TITLE_SUCCESS, payload: {
					coursTitle
				}
			});
			dispatch({
				type: profsTitleConstants.GET_PROFS_TITLE_SUCCESS, payload: {
					profsTitle
				}
			});
			dispatch({
				type: sponsorsTitleConstants.GET_SPONSORS_TITLE_SUCCESS, payload: {
					sponsorsTitle
				}
			});
		}

		if (res.status === 404) {
			return null;
		}

	}
}