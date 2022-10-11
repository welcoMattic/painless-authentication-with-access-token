<?php

namespace App\Entity;

use App\Repository\SecretFormulaRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SecretFormulaRepository::class)]
class SecretFormula
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    public ?int $id = null;

    public function __construct(
        #[ORM\Column(length: 255)]
        public ?string $name = null,
    ) {}
}
