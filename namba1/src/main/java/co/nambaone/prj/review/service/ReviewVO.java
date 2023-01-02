package co.nambaone.prj.review.service;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReviewVO {

	int reviewNum;
	private String movieCode;
	private String userEmail;
	private String userNickname;
	@JsonFormat(pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
	private Date reviewDate;
	private String reivewContent;
	private int reviewScore;

}
