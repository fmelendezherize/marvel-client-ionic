import React, { FC } from 'react';
import { Comic } from '../interfaces/comic';
import { IonImg, IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader } from '@ionic/react';
type Props = {
    comic: Comic;
}
const ComicCard: FC = (props): JSX.Element => {
    const { comic } = props;
    return (
        <IonCard>
            <div
                style={{
                    height: '250px',
                    overflow: 'hidden',
                }}
            >
                <IonImg
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                />
            </div>
            <IonCardHeader>
                <IonCardSubtitle>
                    {comic.title}
                </IonCardSubtitle>
                <IonCardTitle>
                    <h3>
                        {comic.series.name}
                    </h3>
                </IonCardTitle>
            </IonCardHeader>
        </IonCard>
    );
}
export default ComicCard;
