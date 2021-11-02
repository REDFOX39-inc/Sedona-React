import React, { Component } from 'react';

class GalleryIntro extends React.Component {
	render() {
		return(
			<div className="intro">
				<div className="intro__title-block title-block-1">
					<img className="intro__img" src="img/logo/intro--gallery&&form.svg" alt="Intro"/>
				</div>
				<div className="intro__deco-block">
					<img className="intro__deco-img" src="img/decorative/decorative-top-arrows.svg" alt="deco"/>
				</div>
			</div>
		)
	}
}

export default GalleryIntro;
