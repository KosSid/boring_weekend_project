import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router";
import {AiFillHeart, AiOutlineClose, AiOutlineQuestion} from "react-icons/ai";
import withIconButton from "../../hoc/withIconButton";
import withAppContentWrapper from "../../hoc/withAppContentWrapper";
import Preloader from "../../components/Preloader";

import QuestionService from "../../services/QuestionService";
import homeImg from '../../sources/images/Home_img/home_img.png';

import './style.scss';

const Questions = () => {
    const history = useHistory();
    const [perPage, setPerPage] = useState(1);
    const [page, setPage] = useState(1);
    const [searchString, setSearchString] = useState(`?perPage=${perPage}&startPage=${page}`);
    const [textQuestion, setTextQuestion] = useState(null);
    const [preloader, setPreloader] = useState(false);
    const [questionImg, setQuestionImg] = useState(null);

    useEffect(() => {
        history.push(`/questions${searchString}`);
    }, [history, searchString]);

    useEffect(() => {
        setSearchString(`?perPage=${perPage}&startPage=${page}`);
    }, [page, perPage]);

    useEffect(async () => {
        setPreloader(true);
        try {
            const resp = await QuestionService.getQuestions(searchString);
            const {totalNumberOfQuestions, questions} = resp.data;
            if (totalNumberOfQuestions > page) {
                const {category, imageUrls, textOfTheQuestion, _id,} = questions;
                setPreloader(false);
                setTextQuestion(textOfTheQuestion);
            } else {
                history.push('/');
            }
            console.log('FEEDBACK ===============> ', questions);
        } catch (err) {
            setPreloader(false);
            console.log(err)
        }
    }, [searchString])

    const rejectIconHandle = () => {
        setPage(page + 1);
    }
    const maybeIconHandle = () => {
        console.log('maybe icon');
    }
    const heartIconHandle = () => {
        setPage(page + 1);
    }

    const RejectButton = withIconButton(AiOutlineClose, rejectIconHandle);
    const MaybeButton = withIconButton(AiOutlineQuestion, maybeIconHandle);
    const HeartButton = withIconButton(AiFillHeart, heartIconHandle);

    return (
        <>
            {preloader && <Preloader/>}
            {!preloader && <div className={'home__container'}>
                <div className={'home__card'}>
                    <img className={'home__img__page'} src={homeImg} alt='home_img'/>
                    <div className={'home__card_circle_container'}>
                        {!textQuestion &&
                        <div className={'home__card__message'}>
                            <h2>Do you like?</h2>
                            <h1><strong>{textQuestion}</strong></h1>
                        </div>
                        }
                        <div className={'home__circle__container'}>
                            <RejectButton color={'rgba(255, 34, 34, 1)'} fontSize={'30px'}/>
                            <MaybeButton color={'darkblue'} fontSize={'30px'}/>
                            <HeartButton color={'rgba(255, 189, 19, 1)'} fontSize={'30px'}/>
                        </div>
                    </div>
                </div>
                <div className={'home__message'}>
                    <div className={'home__message'}>
                        <h2>Do you like?</h2>
                        <h1><strong>SIGHTSEEING</strong></h1>
                        <div>
                            <p>Arhitecture</p>
                            <p>Culture</p>
                            <p>Parks</p>
                        </div>
                    </div>
                </div>
            </div> }
        </>
    );
};

export default withAppContentWrapper(Questions);