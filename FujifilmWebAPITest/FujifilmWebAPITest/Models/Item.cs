using System;
using System.ComponentModel.DataAnnotations;

namespace FujifilmWebAPITest.Models
{
    public class Item
    {
        [Key]
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Price { get; set; }
        public string Type { get; set; }
        public string User { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }
    }
}
