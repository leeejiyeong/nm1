package co.nambaone.prj.movie.service;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MovieVO {
	private int movieCode;	//영화코드
	private String movieTitle;	//영화제목
	private String movieDirector;	//감독
	private String movieActor;	//배우
	private int movieGenre;	//장르
	private Date movieOpening;	//영화개봉일
	private String movieNation;	//국가
	private String movieTeaser;	//티저
	private String moviePoster;	//포스터
	private String movieOverview;	//개요
	private float movieScore;	//평점
	private int movieHit;	//조회수
	private String movieURL; //영화주소
	private float moviePopularity; //인기도

	
	// 오티티서비스등록삭제일
	private Date movieStartDate;	//영화제공 시작일
	private Date movieEndDate;	//영화제공 종료일
}