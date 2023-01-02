package co.nambaone.prj.review.service;

import java.util.List;

public interface ReviewService {
	
	List<ReviewVO> reviewSelectList();//영화코드별 리뷰리스트 보여주기

	int reviewInsert(ReviewVO vo); // 리뷰 저장

	int reviewUpdate(ReviewVO vo); // 리뷰 수정

	int reviewDelete(ReviewVO vo); // 리뷰 삭제

	ReviewVO reviewSelect(ReviewVO vo); // 리뷰선택

}
