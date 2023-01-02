package co.nambaone.prj.review.map;

import java.util.List;

import co.nambaone.prj.review.service.ReviewVO;

public interface ReviewMapper {

	List<ReviewVO> reviewSelectList();// 영화코드별 리뷰리스트 보여주기

	int reviewInsert(ReviewVO vo); // 리뷰 저장

	int reviewUpdate(ReviewVO vo); // 리뷰 수정

	int reviewDelete(ReviewVO vo); // 리뷰 삭제

	ReviewVO reviewSelect(ReviewVO vo); // 리뷰선택

}
