<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('baskets', function(Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('whichUser');
            $table->unsignedBigInteger('whichProduct');
            $table->unsignedSmallInteger('quantity');
            $table->foreign('whichUser')->on('users')->references('id')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('whichProduct')->on('products')->references('id')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('baskets');
    }
};
