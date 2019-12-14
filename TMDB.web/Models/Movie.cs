using System;
using System.Runtime.Serialization;

namespace TMDB.web.Models
{
    [DataContract]
    public class Movie
    {
        [DataMember(Name = "id")]
        public int Id { get; set; }

        [DataMember(Name = "title")]
        public string Title { get; set; }

        [DataMember(Name = "backdrop_path")]
        public string BackdropPath { get; set; }

        [DataMember(Name = "original_title")]
        public string OriginalTitle { get; set; }

        [DataMember(Name = "overview")]
        public string Overview { get; set; }

        [DataMember(Name = "popularity")]
        public double Popularity { get; set; }

        [DataMember(Name = "poster_path")]
        public string PosterPath { get; set; }

        [DataMember(Name = "release_date")]
        public DateTime ReleaseDate { get; set; }

        [DataMember(Name = "release_date_format")]
        public string ReleaseDateFormat
        {
            get
            {
                return ReleaseDate.ToString("dd MMMM / yy");
            }
        }

        [DataMember(Name = "vote_average")]
        public double VoteAverage { get; set; }
    }
}
