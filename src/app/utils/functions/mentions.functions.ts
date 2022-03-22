import { faBlogger, faFacebook, faFlickr, faGoogle, faInstagram, faTwitter, faWordpress, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faQuestion, IconDefinition } from "@fortawesome/free-solid-svg-icons";

export const getIcon = (socialNetwork: string): IconDefinition => {
  switch (socialNetwork) {
    case 'twitter': return faTwitter;
    case 'instagram': return faInstagram;
    case 'facebook': return faFacebook;
    case 'blogs': return faBlogger;
    case 'wordpress': return faWordpress;
    case 'flickr': return faFlickr;
    case 'youtube': return faYoutube;
    case 'googles': return faGoogle;
    case 'news': return faGlobe;
    default: return faQuestion;
  }
};